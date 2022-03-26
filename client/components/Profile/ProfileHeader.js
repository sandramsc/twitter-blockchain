import { useRouter } from 'next/router';
import { BsArrowLeftShort } from 'react-icons/bs';
//import headerBanner from './img/headerBanner.jpg'
import { useContext, useEffect, useState } from 'react'
import { TwitterContext } from '../../context/TwitterContext'
import { BsArrowLeftShort } from 'react-icons/bs'
import Modal from 'react-modal'
import ProfileImageMinter from './mintingModal/ProfileImageMinter'
import { customStyles } from '../../lib/constants'

const style = {
    wrapper: `border-[#38444d] border-b`,
    header: `py-1 px-3 mt-2 flex items-center`,
    primary: `bg-transparent outline-none font-bold`,
    secondary: `text-[#8899a6] text-xs`,
    backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
    headerBannerContainer: `flex items-center justify-center h-[15vh] overflow-hidden`,
    headerBanner: `object-cover h-full w-full`,
    profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
    profileImage: `object-cover rounded-full h-full`,
    profileImageNFT: `object-cover h-full`,
    profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
    details: `px-3`,
    nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
    activeNav: `text-white`,
  }

const ProfileHeader = () => {
    const { currentAccount, currentUser } = useContext(TwitterContext)
    const [userData, setUserData] = useState<UserData>({
      name: '',
      profileImage: '',
      coverImage: '',
      walletAddress: '',
      tweets: [],
      isProfileImageNFT: undefined,
    })

    const router = useRouter()

    //const isProfileImageNFT = true
    //const currentAccount ='0x76e7866d65A847a0B729943701b69e858ad9a42c'
  return (
    <div className={style.wrapper}>
        <div className={style.header}>
            <div onClick={() => router.push('/')} className={style.backButton}>
                <BsArrowLeftShort/>
            </div>
            <div className={style.details}>
                <div className={style.primary}>{currentUser.name}</div>
                <div className={style.secondary}>
                    {currentUser.tweets?.length}{' '}
                    {currentUser.tweets?.length === 1 ? 'Tweet' : 'Tweets'}
                </div>
            </div>
        </div>
        <div className={style.headerBannerContainer}>
            <img src={currentUser.headerBanner} 
            alt='header_banner'
            className={style.headerBanner}
            />
        </div>
        <div className={style.profileImageContainer}>
            <div className={isProfileImageNFT ? 'hex' : style.profileImageContainer}>
                <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' 
                alt='sajustsmile'
                className={isProfileImageNFT ? style.profileImageNFT : style.profileImage}
                />
            </div>
        </div>
        <div className={style.details}>
            <div>
                <div className={style.primary}>{currentUser.name}</div>
            </div>
            <div className={style.secondary}>{
                currentAccount && (
                    <>
                    @{currentAccount.slice(0,8)}...{currentAccount.slice(-6)}
                    </>
                )
            }</div>
        </div>
    </div>
  )
}

export default ProfileHeader