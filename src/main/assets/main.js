/****************
*
* set up socket connection
*
*****************/
// TODO: check url
var socket = io('http://god.meeteux.fhstp.ac.at/');

socket.on('registerODResult', function (data) {
    console.log('registerODResult');
    console.log(data);

    // get lookuptable back and store as locations in local storage
    var lookuptable = {'locations' : data.locations};
    localStorage.setItem('lookuptable', JSON.stringify(lookuptable));

    // TODO getSuccess back and write current user into localStorage
    registrationSuccess.show();
    outputRegistration.append(" " + JSON.stringify(data));

    // set currentOD in localStorage
    localStorage.setItem('currentOD', JSON.stringify(data.user));

    if(!web){
      window.webkit.messageHandlers.registerOD.postMessage("success");
    }
});

socket.on('registerLocationResult', function (data) {
    console.log('registerLocationResult');
    console.log(data);

    outputLocation.append(JSON.stringify(data));

    // save currentlocaction in localStorage
    localStorage.setItem('currentLocation', JSON.stringify(data));

    var myexhibit = get_exhibit_by_id(data);
    locationHeading.text(myexhibit.description);
});

// UI elements
var headline = $("#headline");
var locationHeading =$("#location");
var registerOdNative = $("#registerODnative");
var userNameInput = $("#username");
var registrationSuccess = $("#registrationSuccess");
var outputRegistration = $("#outputRegistration");
var outputLocation = $("#outputLocation");

//

// Click-Events
registerOdNative.click(function(){
  window.webkit.messageHandlers.getDeviceInfos.postMessage("get");
});

// call from native
// handles new location
// gets major and minor of beacon in an array
// sets new location
function update_location(beacon){
  var myexhibit = get_exhibit_by_id(beacon['minor']);
  var currentOD =  JSON.parse(localStorage.getItem('currentOD'));

  socket.emit('registerLocation', {user: currentOD.id, location: myexhibit.id});
}

// call from native
// gets deviceInfos, calls registerOD
function send_device_infos(deviceinfos){
  console.log(deviceinfos);
  register_od(deviceinfos);
}

// registers new OD
// gets deviceinfos
// sends registerOD to GoD
function register_od(deviceinfos){
  var devicetoregister = {
    'name' : userNameInput.val(),
    'deviceaddress' : deviceinfos['deviceaddress'],
    'systemname' : deviceinfos['systemname'],
    'systemversion' : deviceinfos['deviceaddress'],
    'model' :  deviceinfos['model'],
    'tagid' : 0
  };

  socket.emit('registerOD', devicetoregister['name']);
}

function get_exhibit_by_id(exhibitId){
  var lookuptable =  JSON.parse(localStorage.getItem('lookuptable'));
  for(var i=0 ; i < lookuptable.locations.length ; i++){
      if (lookuptable.locations[i]['id'] == exhibitId){
          myexhibit = lookuptable.locations[i];
      }
  }
  return myexhibit;
}

/****************
*
* Developer tools in web browser (Chrome, Safari)
*
*****************/

// Check if web browser or native web view
var userAgent = window.navigator.userAgent.toLowerCase(),
    safari = /safari/.test( userAgent ),
    //ios = /iphone|ipod|ipad/.test( userAgent ),
    chrome = /chrome/.test( userAgent );
var web = false;

//TODO: check for android native view
if(safari || chrome){
  console.log("you are in web browser");
  web = true;
}
var webdevtools = $("#webdevtools");
var registerODButton = $("#registerOD");
var sendBeaconInfoButton = $("#sendBeaconInfo");

if(web){
  webdevtools.show();
}

var testbeacon = {'major' : 10, 'minor' : 1002};
var testdevice = {
  'deviceaddress' : 'xxx',
  'systemname' : 'iOS',
  'systemversion' : '11.0',
  'model' : 'iPad',
  'tagid' : 1
};
var nearestbeacon;

sendBeaconInfoButton.click(function() {
  //update_location(testbeacon);
  if (typeof MEETeUXAndroidAppRoot !== "undefined")
  	{
        var major = MEETeUXAndroidAppRoot.getNearestBeaconMajor();
        var minor = MEETeUXAndroidAppRoot.getNearestBeaconMinor();
        console.log(major);
        console.log(minor);
        console.log()
         nearestbeacon = {'major' : major, 'minor' : minor};
        //update_location(MEETeUXAndroidAppRoot.getNearestBeacon());
        update_location(nearestbeacon);
  }
});

registerODButton.click(function(){
  register_od(testdevice);
});


/****************
*
* Testfunctions if connection between web and native is working
*
*****************/
// be aware of upper and lower case --> case insensitive: only lower case is allowed for functionnames

// testfunction for calling native
// only parameter is possible for communicating between native and web
function set_headline(text){
  headline.text(text);
}

// testfunction for calling native
function call_native(){
  set_headline("asked for ");
  window.webkit.messageHandlers.observe.postMessage("hello");
}


if(!web){
  setTimeout(call_native, 1000);
}



/*
var socket = io.connect('http://god.meeteux.fhstp.ac.at');
    socket.on('news', function (data) {
        console.log(data);
        socket.emit('registerOD', 'Niklas');
        socket.emit('registerLocation', {user: 1, location: 1, type: 1});

        socket.on('registerODResult', function (data) {
            console.log(data);
        });

        socket.on('registerLocationResult', function (data) {
            console.log(data);
        });
    });
    */
