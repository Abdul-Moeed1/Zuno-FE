interface inputProps {
    value: string
    type?: string
    onChange: ChangeEventHandler<HTMLInputElement>
    label: string
    placeholder ? :string
    className? : string
}

export const Input = ({ value, onChange, type , label , placeholder , className}: inputProps) => {
    return (
        <>
            <div className="flex flex-col gap-3 w-full ">
                <label htmlFor="">{label}</label>
                <input onChange={onChange} type={type} value={value} placeholder={placeholder} className={`${className} w-full h-12 rounded-lg border border-border px-4`}></input>
            </div>
        </>
    )
}