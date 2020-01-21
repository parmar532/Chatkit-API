import React from 'react'
import Chatkit from '@pusher/chatkit' 
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'


import { tokenUrl, instanceLocator } from './config'

class App extends React.Component {
    
    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: '',
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        })
        
        chatManager.connect()
        .then(currentUser => {
            currentUser.subscribeToRoom({
              // roomId:  9e5b26a6-a76c-419e-8a9a-3f737d78aa47,
              roomId:room.id,
  /*             const chatManager = new Chatkit.ChatManager({
                    instanceLocator: "v1:us1:d3449670-b38c-4ecb-bc76-14ca778e1138",
                    userId: "test", 
                    tokenProvider: tokenProvider
                    });
    */            hooks: {
                    onNewMessage: message => {
                        console.log('message.text: ', message.text);
                    }
                }
            })
        })
    }
    
    render() {
        return (
            <div className="app">
                <RoomList />
                <MessageList />
                <SendMessageForm />
                <NewRoomForm />
            </div>
        );
    }
}

export default App