import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { icons, Smile } from 'lucide-react'
import { iconList } from '@/constants/icons';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import axios from 'axios';

  const BASE_URl='https://logoexpress.tubeguruji.com'

function IconList({selectedIcon}) {
    const [openDialog,setOpenDialog]=useState(false);
    const [pngIconList,setPngIconList]=useState([]);
    const storageValue=JSON.parse(localStorage.getItem('value'));
    const [icon,setIcon]=useState(storageValue?storageValue?.icon:'Smile');

    useEffect(()=>{
        getPngIcons();
    },[])

    const Icon =({name,color,size})=>{
        const LucidIcon=icons[name];
        if(!LucidIcon)
        {
         
          return ;
          
        }
        return <LucidIcon color={color} size={size}/>
    
      }

      const  getPngIcons= async ()=>{
        const resp= await axios.get(BASE_URl+'/getIcons.php').then(resp=>{
             setPngIconList(resp.data);
        })//added async and await cause its api call
      }
  return (
    <div>
        <div>
        <label>Icon</label>
            <div 
            onClick={()=>setOpenDialog(true)}
            className='p-3 cursor-pointer bg-gray-200 my-2 rounded-md w-[50px] h-[50px] flex items-center justify-center'>
                {icon?.includes('.png')?
                <img src={BASE_URl+'/png/'+icon}/>:
                <Icon name={icon} color={'#000'} size={20}/>
             }
                
            </div>
        </div>
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
           
            <DialogContent  className='bg-white '>
                <DialogHeader >
                <DialogTitle>Pick your Icon</DialogTitle>
                <DialogDescription>
                <Tabs defaultValue="icon" className="w-[400px] ">
                    <TabsList>
                        <TabsTrigger value="icon" className='text-white'>Icons</TabsTrigger>
                        <TabsTrigger value="color-icon" className='text-white'>Color Icons</TabsTrigger>
                    </TabsList>
                    <TabsContent value="icon">
                    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6 rounded'>
                        {iconList.map((icon,index)=>(
                            <div className='border p-3 flex rounded-sm items-center justify-center cursor-pointer'
                        onClick={()=>{selectedIcon(icon);setOpenDialog(false);
                            setIcon(icon)
                        }} >
                                <Icon name={icon} color={'#000'} size={20}/>
                             </div>
                                
                        ))}
                    </div>
                    </TabsContent>
                    <TabsContent value="color-icon">
                    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6 rounded'>
                        {pngIconList.map((icon,index)=>(
                            <div className='border p-3 flex rounded-sm items-center justify-center cursor-pointer'
                        onClick={()=>{selectedIcon(icon);setOpenDialog(false);
                            setIcon(icon)
                        }} >
                               <img src={BASE_URl+"/png/"+icon} />
                             </div>
                                
                        ))}
                    </div>
                    </TabsContent>
                    </Tabs>

                   
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
            </Dialog>

    </div>
  )
}

export default IconList