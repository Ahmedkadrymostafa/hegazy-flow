'use client'
import React, { useEffect, useRef } from 'react'

const CalendlyEmbed = (props: any) => {
  const iframeRef = useRef(null);

    useEffect(() => {
        const head = document.querySelector("head");
        const script = document.createElement("script");
        script.setAttribute(
          "src",
          "https://assets.calendly.com/assets/external/widget.js"
        );
        head?.appendChild(script);


      }, []);
    
      return (
        // <div
        //   className="calendly-inline-widget"
        //   data-url={props.url}
        //   style={{ minHeight: "650px", width: "100%", height: "100%" }}
        // ></div>
        <iframe ref={iframeRef} src={props.url}></iframe>
  )
}

export default CalendlyEmbed
