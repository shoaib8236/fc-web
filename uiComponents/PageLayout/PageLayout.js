import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import * as ga from '../../lib/ga'

const PageLayout = ({children, title = null, overwrite = false, description = 'OnDemand! NOW! Food Delivery'}) => {

    const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  if(!overwrite){
    if(title)
      title = 'FoodChoo | '+ title;
    else
      title = 'FoodChoo | OnDemand! NOW! Food Delivery'
  }

    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name='description' content={description} />
            </Head>
            {children}
        </>
    )
}

export default PageLayout;