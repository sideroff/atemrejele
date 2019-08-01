import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from '@emotion/styled'
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'

import { HeaderLink } from 'components/atoms'

import { headerLinks } from 'config/navigation'
import { primaryBackgroundColor, primaryColor, primaryColorLight2, fromDesktopDown } from 'config/styleConfig'


import { logoutAction } from 'actions'
import i18n from 'i18n'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5em 0 0.5em 0;
  background-color: ${primaryBackgroundColor};
  color: white;

  ${fromDesktopDown} {
    justify-content: flex-end;
  }
`

const LinksWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${fromDesktopDown} {
    display: none;
  }
`

const ProfileWrapper = styled.div`
  margin-right: 25px;

  &:hover, &:active {
    & > .icon {
      color: ${primaryColor};
    }

    & > .dropdown {
      transform: scaleY(1);
    }
  }
`
const ProfileIcon = styled(FaUserCircle)`
  cursor: pointer;
  color: white;
  font-size: 1.5em;
  transition: font-weight 0.3s, color 0.3s, margin 0.3s;
`

const Dropdown = ({ className, data, idExtractor, renderItem}) => (
  <ul className={className}>
    {data.map(item => 
      <li className='item' key={idExtractor(item)} onClick={item.onClick}>
        { renderItem(item) }
      </li>
    )}
  </ul>
)

const AnimatedDropdown = styled(Dropdown)`
  position: absolute;
  right: 0px;
  background-color: white;
  color: black;
  border: 1px solid black;
  margin: 0;
  padding-inline-start: 0;

  & > .item {
    min-width: 150px;
    padding: 10px 15px;
    box-sizing: border-box;
    transition: background-color 0.15s, color 0.15s, font-weight 0.15s;
  }

  & > .item:hover {
    background-color: ${primaryColorLight2};
    color: white;
    font-weight: bold;
  }

  transform: scaleY(0);
  overflow: hidden;
  transform-origin: top;
  transition: transform 0.3s ease;

  list-style: none;
`

const DropdownListItem = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`

const HeaderNavigation = () => {
  const disabled = useSelector(state => !state.currentUser)

  const dispatch = useDispatch()

  const logout = () => dispatch(logoutAction())

  const dropdownData = [
  {
    id: 'logout',
    onClick: logout,
    label: <span>{i18n.t('logout')}</span>,
    icon: <FaSignOutAlt />
  }
]

  return(
    <Wrapper>
      <LinksWrapper>
        {headerLinks.map(({ url, exact, label }) => <HeaderLink disabled={disabled} to={url} exact={exact} key={url}>{label}</HeaderLink>)}
      </LinksWrapper>
      <ProfileWrapper>
        <ProfileIcon className='icon'/>
        <AnimatedDropdown
          className='dropdown'
          data={dropdownData}
          idExtractor={item => item.id}
          renderItem={item => (
            <DropdownListItem>{item.label}{item.icon}</DropdownListItem>
          )}
        />
      </ProfileWrapper>
    </Wrapper>
  )
}

export default HeaderNavigation
