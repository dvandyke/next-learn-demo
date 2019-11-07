import Head from 'next/head';
import Header from './Header'

export default function Layout(props) {
  return (
    <div>
      <head>
        <title>TEST</title>
        <link rel="stylesheet" href="static/salesforce-lightning-design-system.min.css"
        />
      </head>
      <Header/>
      {props.children}

    </div>
  )
}
