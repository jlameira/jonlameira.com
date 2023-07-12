import Image from 'next/image'

import * as S from './styled'

const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <Image
        src="https://avatars.githubusercontent.com/u/8197441?v=4"
        alt="minha foto de perfil"
        width={64}
        height={64}
      />
    </S.AvatarWrapper>
  )
}

export default Avatar
