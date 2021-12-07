import React from 'react'
import { BiBed } from 'react-icons/bi'
import { AiFillLayout } from 'react-icons/ai'
import { SiSparkpost } from 'react-icons/si'
import { IoMdSettings } from "react-icons/io"
import {FaAlipay} from "react-icons/fa"
import { GiGardeningShears, GiPositionMarker } from 'react-icons/gi'
import { MdLocalLibrary, MdDashboardCustomize } from 'react-icons/md'

export default [
  {
    page: 'products',
    label: 'interior',
    url: `/products/interior`,
    icon: <BiBed className="icon" />,
  },
  {
    page: 'products',
    label: 'exterior',
    url: `/products/exterior`,
    icon: <AiFillLayout className="icon" />,
  },
  {
    page: 'products',
    label: 'garden',
    url: `/products/garden`,
    icon: <GiGardeningShears className="icon" />,
  },
  {
    page: 'products',
    label: 'spa',
    url: `/products/spa`,
    icon: <SiSparkpost className="icon" />,
  },
  {
    page: 'developers',
    label: 'instalation',
    url: `/products/instalation`,
    icon: <IoMdSettings className="icon" />,
  },
  {
    page: 'developers',
    label: 'libraries',
    url: `/products/libraries`,
    icon: <MdLocalLibrary className="icon" />,
  },
  {
    page: 'developers',
    label: 'plugins',
    url: `/products/plugins`,
    icon: <FaAlipay className="icon" />,
  },
  {
    page: 'company',
    label: 'jobs',
    url: `/products/jobs`,
    icon: <GiPositionMarker className="icon" />,
  },
  {
    page: 'company',
    label: 'customers',
    url: `/products/customers`,
    icon: <MdDashboardCustomize className="icon" />,
  },
]
