import Layout from '../components/MyLayout.js'

export default function About() {
  return (
    <Layout>
      <p>This is the about page</p>
      <style jsx>{`
      p {
        color: orange;
      }
      `}</style>
    </Layout>
  )
}
