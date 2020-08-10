import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles from '../../public/style/utils.module.scss'
import { useRouter } from 'next/router'

const name = "Random Users: Profile"
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
          <div className={utilStyles.profilesUser} key={i}>
            <div className={utilStyles.profilesImgWrapper}>
              <img src={user.picture.large} className={utilStyles.borderCircle}/>
            </div>
            <h4 className={`${utilStyles.heading2Xl} ${utilStyles.profilesName}`}>{user.name.first} {user.name.last}</h4>
          </div>
        ))}

      </section>
    </Layout>
  )
}


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
