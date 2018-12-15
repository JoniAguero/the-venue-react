import React from 'react'

const Location = () => {
  return (
    <div className='location_wrapper'>
        <iframe 
            title='map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13617.17081794169!2d-64.19983931695535!3d-31.43360785237244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2587de32789%3A0xd0db2d982247b094!2sQuality+Espacio!5e0!3m2!1ses-419!2sar!4v1544889380328'
            width= '100%'
            height= '500px'
            frameBorder= '0'
            allowFullScreen >
        </iframe>
        <div className="location_tag">
            <div>Location</div>
        </div>
    </div>
  )
}

export default Location
