import { Tabs } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen 
        name='index'
        options={{
            title:'Home',
            headerShown:false,
            tabBarIcon:({focused})=>(
              <>
              </>
            )     
        }}
    
        />

       <Tabs.Screen 
        name='report'
        options={{
            title:'Report',
            headerShown:false,
              tabBarIcon:({focused})=>(
              <>
              </>
            )
            
        }}
        />
         <Tabs.Screen 
        name='search'
        options={{
            title:'Search',
            headerShown:false,
            tabBarIcon:({focused})=>(
              <>

              </>
            )
        }}
        />  
        <Tabs.Screen 
        name='profile'
        options={{
            title:'Profile',
            headerShown:false,
            tabBarIcon:({focused})=>(
              <>
              </>
            )
        }}
        />  
        
    </Tabs>
  )
}

export default _layout  