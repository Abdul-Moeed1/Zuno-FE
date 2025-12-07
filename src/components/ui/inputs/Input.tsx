import { useState, type ChangeEventHandler, type FocusEventHandler } from "react"

interface inputProps {
    value: string
    type?: string
    onChange: ChangeEventHandler<HTMLInputElement>
    label?: string
    innerLabel?: string
    placeholder?: string
    className?: string
    onBlur?: FocusEventHandler<HTMLInputElement>
    onFocus?:FocusEventHandler<HTMLInputElement>
    disabled?: boolean
    error?: string
}

export const Input = ({ value, onChange, type, label, placeholder, className, innerLabel, onBlur, onFocus, disabled = false, error = "" }: inputProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false)

    return (
        <>
            <div className="flex flex-col gap-3 w-full ">
                {label && <label htmlFor="">{label}</label>}
                <div className="w-full relative">

                    <input onChange={onChange} type={type}
                        disabled={disabled}
                        value={value}
                        placeholder={placeholder}
                        onFocus={(e) => { setIsFocused(true); onFocus?.(e) }}
                        onBlur={(e) => { setIsFocused(false); onBlur?.(e) }}
                        className={`${className} w-full h-12 rounded-lg border border-border px-4 ${innerLabel && "h-14 pt-3"} ${error && "border-danger"}`} />
                    {innerLabel && <div className={`absolute left-4 -z-1 h-full text-neutral ${isFocused || value != "" ? "top-[4px] text-xs " : "top-[14px] text-base"}`}>
                        {innerLabel}
                    </div>}
                </div>
                {error && <div className="text-danger text-base -mt-2">{error}</div> }
            </div>
        </>
    )
}