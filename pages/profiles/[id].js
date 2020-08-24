import { useContext } from 'react';
import DataContext from '../components/DataContext';

import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles from '../../public/style/utils.module.scss'


const name = "Profiles: User";
function User({ user }) {
  const router = useRouter().query.id;
  const {data} = useContext(DataContext);

  data.results.filter((obj) => {
    if (obj.login.uuid === router) {
      user = obj;
      return user
    }
  });
  return (
    <Layout>
      <Head>
        <title>{name}</title>
      </Head>
      <section className={utilStyles.profiles}>
        <div key={user.name.first}>
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
          <div className={utilStyles.profilesContent}></div>
        </div>
      </section>
    </Layout>
  )
}

export default User
