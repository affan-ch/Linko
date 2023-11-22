"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import NavBar from "@/components/navbar"
import React, { useState } from 'react';

export default function ShortenPage() {
    const [selectedValue, setSelectedValue] = useState('rdll'); // Set the default value here

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
        console.log(selectedValue);
    };

    return (
        <>
            {/* NavBar */}
            <span className="sticky hidden usm:flex">
                <NavBar className="sticky top-0 w-full" /></span>

            {/* Small Screen Error  */}
            <p className="flex usm:hidden flex-col items-center justify-center align-middle p-8 text-center font-bold text-lg">Screen size is not supported</p>

            {/* Main Body Container */}
            <main className="flex-col items-center p-24 hidden usm:flex">

                {/* Actual Link Input */}
                <div className="grid w-full max-w-sm items-center gap-1.5 mb-8">
                    <Label htmlFor="link">Enter Actual Link</Label>
                    <Input type="text" id="link" placeholder="Link" />
                </div>

                {/* Method Dropdown */}
                <div className="grid w-full max-w-sm items-center gap-1.5 mb-8">
                    <Label htmlFor="dropdown">Select a method</Label>
                    <Select id="dropdown" value={selectedValue} onChange={handleSelectChange}>
                        <SelectTrigger >
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="rull">Random User-Level Link</SelectItem>
                                <SelectItem value="rdll">Random Domain-Level Link</SelectItem>
                                <SelectItem value="cull">Custom User-Level Link</SelectItem>
                                <SelectItem value="cdll">Custom Domain-Level Link</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                {/* Short Link Field */}
                <div className="grid w-full max-w-sm items-center gap-1.5 mb-8">
                    <Label htmlFor="short">Short Link</Label>
                    <div className="relative flex items-center">
                        <span className="absolute left-2 text-gray-500">linko.pk/</span>
                        <Input
                            type="text"
                            id="short"
                            className="pl-20" 
                        />
                        {/* Any other components or content */}
                    </div>

                </div>

                {/* Register Link */}
                <div>
                    <Button>Register Link</Button>
                </div>

            </main>
        </>
    )
}