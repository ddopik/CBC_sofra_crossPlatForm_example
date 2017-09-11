
document.addEventListener("deviceready", onDeviceReady, false);
 function onDeviceReady()
 { 

 if(conn_ch=='Unknown connection' || conn_ch=='No network connection')
 {
    alert('please check your intermet conniction');
    navigator.app.exitApp();
 }
 
var my_path; 
var site_url='http://sofra.cbc-eg.com/'
var conn_ch=checkConnection(); 
var ref;
var device_id = device.serial;

	setTimeout(function () 
    { 	 
    ref = window.open(site_url+'?'+'dv_k='+device_id, '_blank', 'location=no');	
	ref.addEventListener('loadstart',load_app);
	ref.addEventListener('exit',exit_app);
	},5000);  
			
		function load_app(event)       //////inapp load      
	{
		
	
	show_image('img/alaaka_icon.png', 500, 500, 'alaaka');	
 
    }
	
		
	 function exit_app(event) ////////inapp exit
   {
	       
    var conf=confirm("exitting cbc sofra");
 if(conf==true)
	 {
	 navigator.app.exitApp();
	 }
		 else
		 {
		 location.reload(site_url+'?dv_k='+device_id);
		 }
		 
    }
	
	
}









function append_device_id()
{
	
var pathname = window.location.pathname; // Returns path only	
	
	
	
}




function checkConnection() {
	var networkState = navigator.connection.type;

	var states = {};
	states[Connection.UNKNOWN]  = 'Unknown connection';
	states[Connection.ETHERNET] = 'Ethernet connection';
	states[Connection.WIFI]     = 'WiFi connection';
	states[Connection.CELL_2G]  = 'Cell 2G connection';
	states[Connection.CELL_3G]  = 'Cell 3G connection';
	states[Connection.CELL_4G]  = 'Cell 4G connection';
	states[Connection.CELL]     = 'Cell generic connection';
	states[Connection.NONE]     = 'No network connection';
	return  states[networkState];
            
        }
function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}
