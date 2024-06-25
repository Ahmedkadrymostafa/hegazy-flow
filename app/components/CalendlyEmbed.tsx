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



        // const hideElementInIframe = () => {
        //   const iframe: any = iframeRef.current;
        //   // const iframeDocument = iframe.contentWindow.document;
        //   // const iframeDocumentt = iframe.contentDocument;
        //   // console.log(iframeDocument)
        //   // console.log(iframeDocumentt)
        //   if (iframe && iframe.contentWindow) {
        //     const iframeDocument = iframe.contentWindow.document;
            
            
        //     // Ensure the iframe content is loaded
        //     if (iframeDocument.readyState === 'complete') {
        //       const elementToHide = iframeDocument.querySelector('VJL48qbQzWENTFAh1Knk'); // Change the selector as needed
        //       if (elementToHide) {
        //         elementToHide.style.display = 'none';
        //       }
        //     }
        //   }
        // };
    
        // // Attach an event listener to run the function after the iframe content is loaded
        // const iframe: any = iframeRef.current;
        // if (iframe) {
        //   iframe.addEventListener('load', hideElementInIframe);
        // }
    
        // // Cleanup the event listener when the component unmounts
        // return () => {
        //   if (iframe) {
        //     iframe.removeEventListener('load', hideElementInIframe);
        //   }
        // };
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
