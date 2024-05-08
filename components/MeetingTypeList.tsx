"use client";
import Image from 'next/image';
import React, { useState } from 'react'
import HomeCard from './HomeCard';
import { useRouter } from 'next/navigation';
import MeetingModel from './MeetingModel';
import { useUser } from '@clerk/nextjs';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useToast } from "@/components/ui/use-toast"

const initialValues = {
  dateTime: new Date(),
  description: '',
  link: '',
};

const MeetingTypeList = () =>{ 

  const [meetingState, setMeetingState] = useState<'isScheduleMeeting'|'isJoiningMeeting'|'isInstantMeeting'|undefined>();
  const [values, setValues] = useState(initialValues);
  const [callDetail, setCallDetail] = useState<Call>();
  const { toast } = useToast();
  const router = useRouter();

  const { user } = useUser();
  const client = useStreamVideoClient();

  const CreateMeeting = async()=>{
    if(!client || !user) return ;

    try {

      if (!values.dateTime) {
        toast({ title: 'Please select a date and time' });
        return;
      }

        const id = crypto.randomUUID();
        const call = client.call('default', id);

        if(!call) throw new Error( "Failed to create the call");
       
        const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
        const description = values.description || 'Instant Meeting';

        await call.getOrCreate({
          data: {
            starts_at: startsAt,
            custom: {
              description,
            },
          },
        });
        setCallDetail(call);
      if (!values.description) {
        router.push(`/meetings/${call.id}`);
        
        toast({
        title: 'Meeting Created',
      });

      }

    } catch (error) {
      console.log(error);
      toast({ title: "Failed to create Meeting" })
    }

  }

  return (
    <section className=' grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
      <HomeCard 
      img ='/icons/add-meeting.svg'
      title= "New Meeting"
      description ="Start a new Meeting"
      handleClick={()=>setMeetingState('isInstantMeeting')} 
      className = "bg-orange-1"
      />

      <HomeCard img ='/icons/schedule.svg'
      title= "Schedule Meeting"
      description ="Plan your Meeting"
      handleClick={()=>setMeetingState('isScheduleMeeting')}
      className = "bg-blue-1"
      />

      <HomeCard img ='/icons/recordings.svg'
      title= "View Recordings"
      description ="Check Your Recordings"
      handleClick={()=>setMeetingState('isJoiningMeeting')}
      className = "bg-purple-1"
      />

      <HomeCard img ='/icons/join-meeting.svg'
      title= "Join Meeting"
      description ="via invitation link"
      handleClick={()=>setMeetingState('isJoiningMeeting')}
      className = "bg-yellow-1"
      />

      <MeetingModel 
      isOpen={meetingState ==='isInstantMeeting'}
      onClose={()=>setMeetingState(undefined)}
      title="Start An Instant Meeting"
      className="text-center"
      buttonText ="Start Meeting"
      handleClick ={CreateMeeting}
      />
    </section>
  )
}

export default MeetingTypeList