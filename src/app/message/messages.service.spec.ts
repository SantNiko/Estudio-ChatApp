import { TestBed, inject } from '@angular/core/testing';

import { MessagesService } from './messages.service';

import { Message } from './message.model';
import { Thread } from './../thread/thread.model';
import { User } from './../user/user.model';

describe('MessagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagesService]
    });
  });

  it('should be created', inject([MessagesService], (service: MessagesService) => {
    expect(service).toBeTruthy();
  }));
});

describe('MessagesService', () => {
  it('should test', () => {
    const user: User = new User("u1",'Nate', "");
    const thread: Thread = new Thread("t1", "Nate", "");
    const m1: Message = new Message({
      author:user,
      text:'Hi!',
      thread: thread
    });

    const m2: Message = new Message({
      author:user,
      text:'Bye!',
      thread:thread
    });

    const messageService: MessagesService = new MessagesService();
    
    //listen to each message individually as it comes in
    messageService.newMessages
      .subscribe( (message: Message) => {
        console.log('=> new Messages' + message.text);
      })

    // listen to the stream of most current messages
    messageService.messages
      .subscribe( (messages: Message[]) =>{
        console.log('=> messages' + messages.length );
      })

      messageService.addMessage(m1);
      messageService.addMessage(m2);
    });
});
