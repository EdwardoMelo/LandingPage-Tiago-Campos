import { AiFillLike } from 'react-icons/ai'
import { HiCursorClick } from 'react-icons/hi'
import { IoMagnetSharp } from 'react-icons/io5'
import { FaMoneyBillTrendUp } from 'react-icons/fa6'
import { AiTwotoneHeart, AiFillSafetyCertificate, AiOutlineSecurityScan } from 'react-icons/ai'

import Leads from '../../assets/results/leads.jpg'
import Sales from '../../assets/results/sales.jpg'
import Trafego from '../../assets/results/trafego.jpg'
import Engagement from '../../assets/results/engajamento.jpg'
import Reconhecimento from '../../assets/results/reconhecimento.jpg'
import Cadastros from '../../assets/cadastros.jpg';
const results = [
    {title: 'MAIS LEADS', icon: IoMagnetSharp, image: Leads  },
    {title: 'MAIS VENDAS', icon: FaMoneyBillTrendUp, image: Sales },
    {title: 'MAIS CADASTROS', icon: HiCursorClick, image: Cadastros },
    {title: 'MAIS ENGAJAMENTO', icon: AiTwotoneHeart, image: Engagement },
    {title: 'Mais tráfego', icon: AiOutlineSecurityScan, image: Trafego },
    {title: 'Mais reconhecimento', icon: AiFillSafetyCertificate, image: Reconhecimento },
];
export default results;