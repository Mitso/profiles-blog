import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles from '../../public/style/utils.module.scss'
import { useRouter } from 'next/router'

const name = "Profiles: User"
function User({profileFilter}) {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
      <Head>
        <title>{name}</title>
      </Head>
      <section className={utilStyles.profiles}>
        {profileFilter.map((user,i) => (
          <div key={i}>
          <div className={utilStyles.profilesUser} >
            <div className={utilStyles.profilesImgWrapper}>
              <img src={user.picture.large} className={utilStyles.borderCircle}/>
            </div>
            <h4 className={`${utilStyles.heading2Xl} ${utilStyles.profilesName}`}>{user.name.title} {user.name.first} {user.name.last}</h4>
            <div className={utilStyles.bio}>
              <h3 className={utilStyles.headingUser}>Info</h3>
              <p className={utilStyles.headingLabel}><span>Address:</span> {user.location.city}, {user.location.state} in {user.location.country}</p>
              <p className={utilStyles.headingLabel}><span>Email:</span> {user.email}</p>
              <p className={utilStyles.headingLabel}><span>Phone:</span> {user.phone} / {user.cell}</p>
            </div>
          </div>
          <div className={utilStyles.profilesContent}>

          </div>
          </div>
        ))}
      </section>
    </Layout>
  )
}

/*
  // NOTE:
 Fetch external data to display to Home component
*/
export async function getStaticPaths() {
  const res = await fetch('https://randomuser.me/api/?results=50&seed=somethingfun')
  const userData = await res.json()
  const paths = userData.results.map(function(user,i) {
    return {
      params: { id: user.login.uuid },
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch("https://randomuser.me/api/?results=50&seed=somethingfun")
  const profileData = await res.json()
  let profileFilter = profileData.results.filter((obj) => {
    return obj.login.uuid === params.id
  })
  console.log(profileFilter,'EOF');
  return {
    props: {
      profileFilter
    }
  }
}


export default User
