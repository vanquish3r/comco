const comcoscene = BS.BanterScene.GetInstance();

let youtubePlaylist = `PL24rMr-iJJ1LwIG3SPYtnJa3qd3O4F-oQ`;
let websiteurl = "https://screen.sdq.st:8443/?room=comco"; /* ?autoplay=1&controls=0 For YouTube Live */
let otherwebsiteurl = "https://comcotheatre.com/";

BS.BanterScene.GetInstance().On("loaded", () => {
	    console.log("Scene loaded");
      /* COMMENTED THIS OUT TO REMOVE THE YOUTUBE PLAYER */
			 enableYouTube();
      /* UNCOMMENTED THIS TO ENABLE SCREEN CAST / YOUTUBE LIVE */
	          	// enableTheFireScreen();
      /* UNCOMMENTED THIS TO ENABLE FIRE TABLET */
	          	 enableThePortableFireScreen()
});

async function setSceneSettings() {
	console.log("setSceneSettings Loading...");
	const settings = new BS.SceneSettings();
	settings.EnableDevTools = false;
	settings.EnableTeleport = false;
	settings.EnableForceGrab = false;
	settings.EnableSpiderMan = true;
	settings.EnablePortals = true;
	settings.EnableGuests = true;
	// settings.EnableQuaternionPose = false;
	// settings.EnableControllerExtras = true;
	// settings.EnableFriendPositionJoin = true;
	// settings.EnableDefaultTextures = true;
	// settings.EnableAvatars = true;
	settings.MaxOccupancy = 45;
	settings.RefreshRate = 72;
	settings.ClippingPlane = new BS.Vector2(0.05, 1000);
	settings.SpawnPoint = new BS.Vector4(0, 0.01, 0, 180);
	comcoscene.TeleportTo({x: 0, y: 0.01, z: 0}, 180, true);
	comcoscene.SetSettings(settings);
	setTimeout(() => { comcoscene.SetSettings(settings); }, 2000);
};

// videoplayer toggle by HBR & FireRat.
let ytplayerdisabled = true;
  function enableYouTube() {
  if (ytplayerdisabled){ ytplayerdisabled = false;
    console.log("YouTube Player Loading");
    const videoplayer = document.createElement("script");
		videoplayer.id = "comco-videoplayer";
		videoplayer.setAttribute("scale", "1 1 1");
		videoplayer.setAttribute("mip-maps", "0");
		videoplayer.setAttribute("rotation", "0 0 0");
		videoplayer.setAttribute("position", "0 -5 0");
		videoplayer.setAttribute("hand-controls", "true");
		videoplayer.setAttribute("button-position", "-0.22 3 -10.1");
		videoplayer.setAttribute("volume", "3");
		videoplayer.setAttribute("button-rotation", "0 0 0");
		videoplayer.setAttribute("button-scale", "2 2 2");
		videoplayer.setAttribute("spatial-min-distance", "1");
		videoplayer.setAttribute("spatial-max-distance", "1000");
		videoplayer.setAttribute("playlist", youtubePlaylist);
		videoplayer.setAttribute("announce", "false");
		videoplayer.setAttribute("data-playlist-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Playlist.png?v=1713028119937");
		videoplayer.setAttribute("data-vol-up-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/VolUp.png?v=1713028119640");
		videoplayer.setAttribute("data-vol-down-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/VolDown.png?v=1713028119279");
		videoplayer.setAttribute("data-mute-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Mute.png?v=1713028120228");
		videoplayer.setAttribute("data-skip-forward-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Forward.png?v=1713028118642");
		videoplayer.setAttribute("data-skip-backward-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Backwardsd.png?v=1713028118986");
		videoplayer.setAttribute("src", "https://best-v-player.glitch.me/playlist.js"); // https://vidya.sdq.st/playlist.js
    document.querySelector("a-scene").appendChild(videoplayer);
  } else {console.log("YouTube Player Loading...");}
};

let screenDisabled = true;
function enableTheFireScreen() {
  if (screenDisabled){ screenDisabled = false;
	console.log("Adding Screen Cast");
	const firescreen = document.createElement("script");
	firescreen.id = "comco-firescreen";
	firescreen.setAttribute("scale", "0.76 0.76 1");
	firescreen.setAttribute("rotation", "0 0 0");
	firescreen.setAttribute("position", "0 -5 0");
	firescreen.setAttribute("mipmaps", "0");
	firescreen.setAttribute("pixelsperunit", "1200");
	firescreen.setAttribute("width", "1280");
	firescreen.setAttribute("height", "720");
	firescreen.setAttribute("castmode", "true");
	firescreen.setAttribute("backdrop", "false");
	firescreen.setAttribute("hand-controls", "true");
	firescreen.setAttribute("announce", "false");
	firescreen.setAttribute("announce-four-twenty", "false");
	firescreen.setAttribute("announce-events", "false");
	firescreen.setAttribute("volume", "0.5");
	firescreen.setAttribute("button-position", "-0.18 10 10.171");
	firescreen.setAttribute("website", websiteurl);
	firescreen.setAttribute("src", "https://firer.at/scripts/firescreen.js");
	document.querySelector("a-scene").appendChild(firescreen);
  }
  // setTimeout(() => { 
  //   let firescreencast = document.getElementById("fires-browser1");
  //   firescreencast.browser.RunActions(JSON.stringify({"actions":[{"actionType": "click2d","strparam1": "0.5,0.5;"}]}));
  //   console.log("Click Browser");
  // }, 3000); 
    console.log("Screen Stuff enabled");
}

let screenPortableDisabled = true;
function enableThePortableFireScreen() {
  if (screenPortableDisabled){ screenPortableDisabled = false;
   setTimeout(() => { 
	console.log("Adding Fire Tablet");
	const firescreen = document.createElement("script");
	firescreen.id = "comco-portable-firescreen";
	firescreen.setAttribute("scale", "0.7 0.7 1");
	firescreen.setAttribute("rotation", "0 0 0");
	firescreen.setAttribute("position", "-16.45 1.269 0.75");
	firescreen.setAttribute("mipmaps", "0");
	firescreen.setAttribute("pixelsperunit", "1200");
	firescreen.setAttribute("width", "1280");
	firescreen.setAttribute("height", "720");
	firescreen.setAttribute("announce", "true");
	firescreen.setAttribute("announce-events", "true");
	firescreen.setAttribute("volume", "0.5");
 	firescreen.setAttribute("backdrop", "true");
	firescreen.setAttribute("custom-button01-url", "https://banterlateshow.glitch.me/0-0-shownotes-0-0.txt");
	firescreen.setAttribute("custom-button01-text", "Show Notes");
	firescreen.setAttribute("custom-button02-url", "https://banterlateshow.glitch.me/darwinawards.html");
	firescreen.setAttribute("custom-button02-text", "Darwin Awards");
	firescreen.setAttribute("custom-button03-url", "https://banterlateshow.com");
	firescreen.setAttribute("custom-button03-text", "Banter Late Show");
	firescreen.setAttribute("website", otherwebsiteurl);
	firescreen.setAttribute("src", "https://firer.at/scripts/firescreenv2.js");
	document.querySelector("a-scene").appendChild(firescreen);
   }, 5000); 
  }
    console.log("Fire Tablet enabled");

}
