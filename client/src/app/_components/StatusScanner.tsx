"use client"
import React, { useState } from 'react'
import QrReader from 'react-qr-scanner'
import { ConnectButton } from '@rainbow-me/rainbowkit';

interface scanData{
    text: string
}

export default function StatusScanner() {
    const [data, setData] = useState<string>()

    const handleScan = (cData: scanData)=>{
        if(cData){
            console.log(cData.text)
            setData(cData.text)
        }
    }

  return (
    <div className="">
        {!data ? <QrReader className='aspect-square' delay={100} onScan={handleScan} /> : data}
        <ConnectButton />
    </div>
  )
}
