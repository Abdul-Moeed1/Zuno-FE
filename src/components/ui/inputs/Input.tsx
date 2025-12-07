import { useState } from "react"

interface inputProps {
    value: string
    type?: string
    onChange: ChangeEventHandler<HTMLInputElement>
    label?: string
    innerLabel?: string
    placeholder?: string
    className?: string
}

export const Input = ({ value, onChange, type, label, placeholder, className, innerLabel }: inputProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false)
    console.log("value" , value);
    
    return (
        <>
            <div className="flex flex-col gap-3 w-full ">
                {label && <label htmlFor="">{label}</label>}
                <div className="w-full relative">

                    <input onChange={onChange} type={type} value={value}
                        placeholder={placeholder}
                        onFocus={() => { setIsFocused(true) }}
                        onBlur={() => { setIsFocused(false) }}
                        className={`${className} w-full h-12 rounded-lg border border-border px-4 ${innerLabel && "h-14 pt-3"}`} />
                    {innerLabel && <div className={`absolute left-4 -z-1 h-full text-neutral ${isFocused || value != "" ? "top-[4px] text-xs " : "top-[14px] text-base"}`}>
                        {innerLabel}
                    </div>}
                </div>
            </div>
        </>
    )
}