import {
    IconChevronDown,
    IconChevronUp,
    IconMailForward,
    IconMapPins,
  } from "@tabler/icons";
  import { useState } from 'react'
  import ShowHidden from "./ShowHidden"

  export default function Hidden(data) {
    const [show, setShow] = useState(false)
    const onClickHandler = () => {
        if(show === true){
            setShow(false)
        }else{
            setShow(true)
        }
    }
    return(
        <div className="border-bottom" >
        {/* main section */}
            <div className="d-flex align-items-center p-3" onClick={() =>  onClickHandler()} >
            <img
                src={data.pic}
                width="90px"
                class="rounded-circle me-4"
            />
            <span className="text-center display-6 me-auto">
                {data.name}
            </span>
            <span>
                {show?<IconChevronUp />:<IconChevronDown />}
            </span>

           

            </div>
            {show?<ShowHidden email = {data.email} location = {data.location}/>:false}
        </div>
    )
}

    
