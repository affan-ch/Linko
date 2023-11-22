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

export default function ShortenPage() {
    return (
        <>
        <span className="sticky hidden usm:flex">
        <NavBar className="sticky top-0 w-full"/></span>
        <p className="flex usm:hidden flex-col items-center justify-center align-middle p-8 text-center font-bold text-lg">Screen size is not supported</p>

        <main className="flex-col items-center p-24 hidden usm:flex">
            <div className="grid w-full max-w-sm items-center gap-1.5 mb-8">
                <Label htmlFor="link">Enter Actual Link</Label>
                <Input type="text" id="link" placeholder="Link" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 mb-8">
            <Label htmlFor="dropdown">Select a method</Label>
            <Select id="dropdown">
                <SelectTrigger >
                    <SelectValue placeholder="Select a method"/>
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
            <div>
                <Button>Register Link</Button>
            </div>
            
        </main>
        </>
    )
}