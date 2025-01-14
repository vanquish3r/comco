const comcoscene = BS.BanterScene.GetInstance();

let websiteurl = "https://screen.sdq.st:8443/?room=comco"; /* ?autoplay=1&controls=0 For YouTube Live */

let otherwebsiteurl = "https://comcotheatre.com/"; // Fire Tablet Homepage

async function somerandomStartActions() {
	const waitingForUnity = async () => { while (!comcoscene.unityLoaded) { await new Promise(resolve => setTimeout(resolve, 500)); } };
	await waitingForUnity(); console.log("SCRIPT: Unity-Loaded"); setSceneSettings(); setTimeout(() => { 

		/* COMMENTED THIS OUT TO REMOVE THE YOUTUBE PLAYER */
			//  enableVideoPlayer2();
		/* UNCOMMENTED THIS TO ENABLE SCREEN CAST / YOUTUBE LIVE */
			  enableScreenStuff2();

    setTimeout(() => { enableScreenThingy(); }, 8000);
	}, 3000);
};

/*
      BS.BanterScene.GetInstance().On("unity-loaded", () => {
        BS.BanterScene.GetInstance().TeleportTo(
          { x: 0, y: 0.01, z: 0 },
          180,
          true
        );
        console.log("setSceneSettings Loading...");
        const ssettings = new BS.SceneSettings();
        settings.EnableDevTools = false;
        settings.EnableTeleport = true;
        settings.EnableForceGrab = false;
        settings.EnableSpiderMan = false;
        settings.EnablePortals = true;
        settings.EnableGuests = false;
        settings.EnableQuaternionPose = false;
        settings.EnableControllerExtras = true;
        settings.EnableFriendPositionJoin = true;
        settings.EnableDefaultTextures = true;
        settings.EnableAvatars = true;
        settings.MaxOccupancy = 40;
        settings.RefreshRate = 72;
        settings.ClippingPlane = new BS.Vector2(0.05, 1000);
	settings.SpawnPoint = new BS.Vector4(0, 0.01, 0, 180);
        setTimeout(
          () => BS.BanterScene.GetInstance().SetSettings(settings),
          2000
        );
      });
*/

async function setSceneSettings() {
	console.log("setSceneSettings Loading...");
	const settings = new BS.SceneSettings();
	settings.EnableDevTools = false;
	settings.EnableTeleport = true;
	settings.EnableForceGrab = false;
	settings.EnableSpiderMan = false;
	settings.EnablePortals = true;
	settings.EnableGuests = false;
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

// videoplayer toggle by HBR.& Fire Thank you HBR!
let ytplayerdisabled = true;
  function enableVideoPlayer2() {
  if (ytplayerdisabled){
    console.log("yt player enabling");
    ytplayerdisabled = false;
    const videoplayer = document.createElement("script");
		videoplayer.id = "comco-videoplayer";
		videoplayer.setAttribute("scale", "1 1 1");
		videoplayer.setAttribute("mip-maps", "0");
		videoplayer.setAttribute("rotation", "0 0 0");
		videoplayer.setAttribute("position", "0 -5 0");
		videoplayer.setAttribute("hand-controls", "true");
		videoplayer.setAttribute("button-position", "-0.22 3 10.1");
		videoplayer.setAttribute("volume", "3");
		videoplayer.setAttribute("button-rotation", "0 0 0");
		videoplayer.setAttribute("button-scale", "2 2 2");
		videoplayer.setAttribute("spatial-min-distance", "1");
		videoplayer.setAttribute("spatial-max-distance", "1000");
		videoplayer.setAttribute("playlist", "PLZWiw-xxQ4SP1uCfpCU8OkHg-tlzewULz");
		videoplayer.setAttribute("announce", "false");
	  	// videoplayer.setAttribute("announce-events", "false");
		videoplayer.setAttribute("data-playlist-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Playlist.png?v=1713028119937");
		videoplayer.setAttribute("data-vol-up-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/VolUp.png?v=1713028119640");
		videoplayer.setAttribute("data-vol-down-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/VolDown.png?v=1713028119279");
		videoplayer.setAttribute("data-mute-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Mute.png?v=1713028120228");
		videoplayer.setAttribute("data-skip-forward-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Forward.png?v=1713028118642");
		videoplayer.setAttribute("data-skip-backward-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Backwardsd.png?v=1713028118986");
		videoplayer.setAttribute("src", "https://best-v-player.glitch.me/playlist.js"); // https://vidya.sdq.st/playlist.js
    document.querySelector("a-scene").appendChild(videoplayer);
  } else {console.log("enable yt player called");}
};

let screenstuffDisabled = true;
function enableScreenStuff2() {
  if (screenstuffDisabled){
		screenstuffDisabled = false;
		console.log("Adding Screen Cast");
		const firescreen = document.createElement("script");
		firescreen.id = "comco-firescreen";
		firescreen.setAttribute("scale", "1 1 1");
		firescreen.setAttribute("rotation", "0 0 0");
		firescreen.setAttribute("screen-rotation", "0 0 0");
		firescreen.setAttribute("screen-scale", "0.515 0.515 1");
		firescreen.setAttribute("position", "-0.21 2.5 -10.1");
		firescreen.setAttribute("lock-position", "true");
		firescreen.setAttribute("mipmaps", "1");
		firescreen.setAttribute("pixelsperunit", "1600");
		firescreen.setAttribute("castmode", "true");
		firescreen.setAttribute("backdrop", "false");
		firescreen.setAttribute("disable-rotation", "true");
		firescreen.setAttribute("hand-controls", "false");
		firescreen.setAttribute("announce", "false");
		firescreen.setAttribute("announce-events", "false");
		firescreen.setAttribute("announce-four-twenty", "false");
		firescreen.setAttribute("volume", "0.25");
		firescreen.setAttribute("width", "1920");
		firescreen.setAttribute("height", "1080");
		firescreen.setAttribute("screen-position", "0.21 -7.5 10.1");
		firescreen.setAttribute("website", websiteurl);
		firescreen.setAttribute("src", "https://firer.at/scripts/firescreenv2.js");
		document.querySelector("a-scene").appendChild(firescreen);
		if (websiteurl.includes("hyperbeam.com/i/")) {
			setTimeout(async () => { 
				let theBrowserthingy = await comcoscene.Find(`MyBrowser2`);
				let thebrowserpart = theBrowserthingy.GetComponent(BS.ComponentType.BanterBrowser);
				thebrowserpart.RunActions(JSON.stringify({"actions": [{ "actionType": "runscript","strparam1": "const checkbox = document.querySelector(`.p-checkbox-box[role='checkbox']`); const joinButton = document.querySelector('.footer_3Yiou .joinBtn_1TAU6'); if (checkbox) checkbox.click(); if (joinButton) { const observer = new MutationObserver(() => { if (!joinButton.classList.contains('p-disabled')) { joinButton.click(); observer.disconnect(); setTimeout(() => { const skipButton = document.querySelector('.dialog-secondary-btn'); if (skipButton) skipButton.click(); }, 3000); } }); observer.observe(joinButton, { attributes: true, attributeFilter: ['class'] }); }" }]}));
				setTimeout(async () => {
					thebrowserpart.RunActions(JSON.stringify({"actions": [{ "actionType": "runscript","strparam1": "var fullscreenButton = document.querySelector(`.p-button.p-component.tu-button.btn-tertiary.btn_2YRyp svg path[d^='M3 3h6.429']`); if (fullscreenButton) { fullscreenButton.closest('button').click(); } setTimeout(async () => { var chatButton = document.querySelector(`.p-button.p-component.tu-button.btn-tertiary.fsChatBtn_2cCyy svg path[d^='M22 22h-2V2h2v20zM2 11h12.17']`); if (chatButton) { chatButton.closest('button').click(); } }, 3500);" }]}));
				}, 5000);
			}, 3000);
		}
  }
	console.log("Screen Stuff enabled: " + screenstuffDisabled);
};

let otherScreenDisabled = true;

function enableScreenThingy() {
	console.log("File: loaded");
	if (otherScreenDisabled) {
		otherScreenDisabled = false;
		console.log("Adding Screen");
		const firescreen = document.createElement("script");
		firescreen.id = "banter-firescreen";
		firescreen.setAttribute("scale", "0.8 0.8 1");
		firescreen.setAttribute("position", "-16.989 1.269 -29.428");
		firescreen.setAttribute("rotation", "0 0 0");		
		firescreen.setAttribute("mipmaps", "0");
		firescreen.setAttribute("pixelsperunit", "1200");
		firescreen.setAttribute("hand-controls", "true");
		firescreen.setAttribute("announce", "false");
		firescreen.setAttribute("announce-events", "true");
		firescreen.setAttribute("announce-four-twenty", "false");
		firescreen.setAttribute("volume", "0.25");
		firescreen.setAttribute("width", "1280");
		firescreen.setAttribute("height", "720");
		firescreen.setAttribute("website", otherwebsiteurl);
		// firescreen.setAttribute("disable-rotation", "false");
		firescreen.setAttribute("custom-button01-url", "https://banterlateshow.glitch.me/0-0-shownotes-0-0.txt");
		firescreen.setAttribute("custom-button01-text", "Show Notes");
		firescreen.setAttribute("custom-button02-url", "https://banterlateshow.glitch.me/darwinawards.html");
		firescreen.setAttribute("custom-button02-text", "Darwin Awards");
		firescreen.setAttribute("custom-button03-url", "https://banterlateshow.com");
		firescreen.setAttribute("custom-button03-text", "Banter Late Show");
		firescreen.setAttribute("custom-button04-url", "https://bls.firer.at/shownotes.html");
		firescreen.setAttribute("custom-button04-text", "firer.at shownotes");
		firescreen.setAttribute("src", "https://firer.at/scripts/firescreenv2.js");
		document.querySelector("a-scene").appendChild(firescreen);
	};
}

setTimeout(() => { somerandomStartActions(); }, 5000);

// Poster Boards
  async function createPoster(name, butPosition, posterImage = null, posterLink, localRotation = new BS.Vector3(0,0,0), localScale = new BS.Vector3(1, 1, 1), width = 1.3, height = 1.8) {
    const buttonObject = await new BS.GameObject(`Button_${name}`).Async(); // Create the Object and give it a name
    await buttonObject.AddComponent(new BS.BanterGeometry(BS.GeometryType.PlaneGeometry, 0, width, height)); // add geometry to the object
    await buttonObject.AddComponent(new BS.BanterMaterial('Unlit/Diffuse', posterImage, new BS.Vector4(1, 1, 1, 1))); // Set the Shader (Unlit/Diffuse) and the Color (0.1, 0.1, 0.1, 0.7) 0.7 being the alpha / transparency 
    const buttonTransform = await buttonObject.AddComponent(new BS.Transform()); // Add a transform component so you can move and transform the object
    await buttonObject.AddComponent(new BS.MeshCollider(true)); // Add a mesh Collider for the clicking to work
    buttonObject.SetLayer(5); // Set the object to UI Layer 5 so it can be clicked

    buttonTransform.position = butPosition; // Set the Position of the object
    buttonTransform.localScale = localScale; // Set the Scale of the object
    buttonTransform.localEulerAngles = localRotation; // Set the Scale of the object

      buttonObject.On('click', () => {
        console.log(`Button clicked!`);
        openPage(posterLink);
      });
  }
          // NAME // Button Position // posterImage // localRotation
    createPoster('PosterL1', new BS.Vector3(-13.27,3.2,-12.05), 'https://vanquish3r.github.io/comco/posters/poster-l1.jpg', 'https://comcotheatre.com/packages/', new BS.Vector3(0,-44.55,0));
    createPoster('PosterL2', new BS.Vector3(-16.8,8.5,-8.51), 'https://vanquish3r.github.io/comco/posters/poster-l2.jpg', 'https://comcotheatre.com/packages/', new BS.Vector3(0,-44.55,0));
    createPoster('PosterL3', new BS.Vector3(-20.33,13.79,-4.97), 'https://vanquish3r.github.io/comco/posters/poster-l3.jpg', 'https://comcotheatre.com/packages/', new BS.Vector3(0,-44.55,0));
    createPoster('PosterR1', new BS.Vector3(12.97,3.2,-12.09), 'https://vanquish3r.github.io/comco/posters/poster-r1.jpg', 'https://comcotheatre.com/packages/', new BS.Vector3(0,45.1,0));
    createPoster('PosterR2', new BS.Vector3(16.48,8.5,-8.54), 'https://vanquish3r.github.io/comco/posters/poster-r2.jpg', 'https://comcotheatre.com/packages/', new BS.Vector3(0,45.1,0));
    createPoster('PosterR3', new BS.Vector3(20.04,13.79,-5.04), 'https://vanquish3r.github.io/comco/posters/poster-r3.jpg', 'https://comcotheatre.com/packages/', new BS.Vector3(0,45.1,0));
  
