import { CrossIcon } from "./icons/CrossIcon";
import { Button } from "./ui/Button";
import { InputBox } from "./ui/InputBox";

export function AddContentModel({open, onClose}){
    return <div>
        {open && <div className="w-screen h-screen bg-slate-300 fixed top-0 left-0 opacity-70 flex justify-center">
        <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 rounded p-4">
                <div className="flex justify-end">
                    <CrossIcon size="lg"/>
                </div>
                <div>
                    <InputBox placeholder="Title" />
                    <InputBox placeholder="Link" />
                    <div className="flex justify-center py-2">
                    <Button variant="primary" size="md" text="Submit"/>
                    </div>
                </div>
            </span>
        </div>
        </div>}

    </div>
}