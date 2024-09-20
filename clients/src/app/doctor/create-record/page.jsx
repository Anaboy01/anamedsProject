"use client"

import React, { useState, useCallback, useRef } from 'react'
import { Input } from '@/app/components/ui/input'
import { Label } from '@/app/components/ui/label'
import Sidebar from '../Sidebar/Sidebar'
import { Textarea } from '../../components/ui/textarea'
import { CiCircleRemove } from "react-icons/ci";
import { Button } from '../../components/ui/button'

const Page = () => {
  const [testFields, setTestFields] = useState([{ type: '', results: '' }]);
  const [prescriptions, setPrescriptions] = useState(['']);
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const addTestField = useCallback(() => {
    setTestFields(prev => [...prev, { type: '', results: '' }]);
  }, []);

  const removeTestField = useCallback((index) => {
    setTestFields(prev => prev.filter((_, i) => i !== index));
  }, []);

  const updateTestField = useCallback((index, field, value) => {
    setTestFields(prev => prev.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    ));
  }, []);

  const addPrescription = useCallback(() => {
    setPrescriptions(prev => [...prev, '']);
  }, []);

  const removePrescription = useCallback((index) => {
    setPrescriptions(prev => prev.filter((_, i) => i !== index));
  }, []);

  const updatePrescription = useCallback((index, value) => {
    setPrescriptions(prev => prev.map((item, i) => 
      i === index ? value : item
    ));
  }, []);

  const handleImageUpload = useCallback((event) => {
    const files = Array.from(event.target.files);
    setImages(prev => [...prev, ...files]);
  }, []);

  const handleVideoUpload = useCallback((event) => {
    const files = Array.from(event.target.files);
    setVideos(prev => [...prev, ...files]);
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <div className='px-10 pt-10 text-black'>
        <p className='font-medium text-[24px]'>Create patient record</p>
        <div>
          <div className="flex w-full items-center gap-1.5 capitalize">
            <div className='w-full'>
              <div className='text-[14px] font-medium'>File Name</div>
              <Input
                className="w-full"
                required
                id="fileName"
                placeholder='Your file name'
                type="text"
              />
              <div className='w-full flex flex-col justify-center gap-4'>
                <div>
                  <div className='text-[14px] font-medium'>Test Fields</div>
                  {testFields.map((field, index) => (
                    <div key={index} className='flex items-center mb-2'>
                      <Input
                        className="w-full mr-2"
                        required
                        value={field.type}
                        onChange={(e) => updateTestField(index, 'type', e.target.value)}
                        placeholder='Test type'
                        type="text"
                      />
                      <Input
                        className="w-full mr-2"
                        required
                        value={field.results}
                        onChange={(e) => updateTestField(index, 'results', e.target.value)}
                        placeholder='Test results'
                        type="text"
                      />
                      <CiCircleRemove
                        size={30}
                        className='cursor-pointer'
                        onClick={() => removeTestField(index)}
                      />
                    </div>
                  ))}
                  <div className='flex items-center w-full justify-center mt-2'>
                    <button
                      className='border border-input bg-background hover:bg-accent hover:text-accent-foreground border-[#17678D] text-[#17678D] h-11 rounded-full px-8'
                      onClick={addTestField}
                    >
                      Add field
                    </button>
                  </div>
                </div>

                <div>
                  <div className='text-[14px] font-medium'>Story</div>
                  <div>
                    <Textarea
                      placeholder={'Campaign story'}
                      className='p-[16px, 20px, 16px, 20px] h-[229px] w-[720px]'
                    />
                  </div>
                </div>

                <div className='flex flex-col gap-2'>
                  <div className='text-[14px] font-medium'>Prescription</div>
                  {prescriptions.map((prescription, index) => (
                    <div key={index} className='flex items-center w-[394px] gap-4'>
                      <Input
                        className="w-full"
                        required
                        value={prescription}
                        onChange={(e) => updatePrescription(index, e.target.value)}
                        placeholder='Enter prescription'
                        type="text"
                      />
                      <CiCircleRemove
                        size={28}
                        className='cursor-pointer'
                        onClick={() => removePrescription(index)}
                      />
                    </div>
                  ))}
                  <div>
                    <button
                      className='border border-input bg-background hover:bg-accent hover:text-accent-foreground border-[#17678D] text-[#17678D] h-11 rounded-full px-8'
                      onClick={addPrescription}
                    >
                      Add prescription
                    </button>
                  </div>
                </div>

              <div className='flex flex-col justify-center gap-2 py-4'>
                  <div>
                    <div className='font-medium text-[14px]'>Images</div>
                    <div>
                      <input
                        type="file"
                        ref={imageInputRef}
                        onChange={handleImageUpload}
                        accept="image/*"
                        multiple
                        className="hidden"
                      />
                      <button
                        className='border border-input bg-background hover:bg-accent hover:text-accent-foreground border-[#17678D] text-[#17678D] h-12 w-[551px] rounded-full px-8'
                        onClick={() => imageInputRef.current?.click()}
                      >
                        Add image
                      </button>
                    </div>
                    {images.length > 0 && (
                      <div className="mt-2">
                        <p>Selected images: {images.map(file => file.name).join(', ')}</p>
                      </div>
                    )}
                  </div>
  
                  <div>
                    <div className='font-medium text-[14px]'>Add Videos</div>
                    <div>
                      <input
                        type="file"
                        ref={videoInputRef}
                        onChange={handleVideoUpload}
                        accept="video/*"
                        multiple
                        className="hidden"
                      />
                      <button
                        className='border border-input bg-background hover:bg-accent hover:text-accent-foreground border-[#17678D] text-[#17678D] h-12 w-[551px] rounded-full px-8'
                        onClick={() => videoInputRef.current?.click()}
                      >
                        Add videos
                      </button>
                    </div>
                    {videos.length > 0 && (
                      <div className="mt-2">
                        <p>Selected videos: {videos.map(file => file.name).join(', ')}</p>
                      </div>
                    )}
                  </div>
  
                  <div className='text-center'>
                    <Button className={'w-[353px] h-[47px] text-[16px] rounded-full'}>
                      Create
                    </Button>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page