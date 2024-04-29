// Room.js

import React, { useEffect, useRef } from 'react';
import './css/room.css';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { ZegoSuperBoardManager } from 'zego-superboard-web';

export default function Room() {
  const { roomID } = useParams();
  const meetingContainerRef = useRef(null);

  useEffect(() => {
    const initializeMeeting = async () => {
      let appID = 1243893487;
      let serverSercet = 'ea39df90281b33ab25b2ee297fe3c91a';

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSercet,
        roomID,
        Date.now().toString(),
        ' '
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.addPlugins({ ZegoSuperBoardManager });

      zp.joinRoom({
        container: meetingContainerRef.current,
        sharedLinks: [
          {
            name: 'Copy Link',
            url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomID,
          },
        ],
        onUserAvatarSetter: (userList) => {
          userList.forEach((user) => {
            user.setUserAvatar('');
          });
        },
        maxUsers: 200,
        videoResolutionList: [
          ZegoUIKitPrebuilt.VideoResolution_720P,
          ZegoUIKitPrebuilt.VideoResolution_720P,
          ZegoUIKitPrebuilt.VideoResolution_720P,
          ZegoUIKitPrebuilt.VideoResolution_720P,
        ],
        videoResolutionDefault: ZegoUIKitPrebuilt.VideoResolution_720P,
        screenSharingConfig: {
          resolution: ZegoUIKitPrebuilt.ScreenSharingResolution_1080P,
        },
        whiteboardConfig: {
          showAddImageButton: true,
          showCreateAndCloseButton: true,
        },
        showRoomTimer: true,
        showInviteToCohostButton: true,
        showRemoveCohostButton: true,
        showRequestToCohostButton: true,
        enableUserSearch: true,
        branding: {
          logoURL: './assets/download.png',
        },
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall,
        },
        extendButtons:[
          {
            name: 'CustomButton',
            onClick: () => {
              // Custom button action
              console.log('Custom button clicked!');
            },
          },
        ],
        showMyCameraToggleButton: true,
        showAudioVideoSettingsButton: true,
        showScreenSharingButton: true,
        turnOnMicrophoneWhenJoining: true,
        turnOnCameraWhenJoining: true,
      });
    };

    if (meetingContainerRef.current) {
      initializeMeeting();
    }
  }, [roomID]);

  return (
   
       
      <div className='meeting' ref={meetingContainerRef} style={{ width: '100vw', height: '100vh' }} />

  );
}
