import { TeamScheme } from '../../types/TeamScheme';

interface Props {
  scheme: TeamScheme;
  small?: boolean;
}
const DEFAULT_STYLE =
  'inline-flex items-center rounded-lg px-2 py-1 text-sm font-bold text-white';

const SCHEME_MAP: Record<TeamScheme, { name: string; style: string }> = {
  kia: { name: '기아', style: 'bg-team-kia' },
  samsung: { name: '삼성', style: 'bg-team-samsung' },
  lg: { name: 'LG', style: 'bg-team-lg' },
  doosan: { name: '두산', style: 'bg-team-doosan' },
  ssg: { name: 'SSG', style: 'bg-team-ssg' },
  kt: { name: 'KT', style: 'bg-team-kt' },
  nc: { name: 'NC', style: 'bg-team-nc' },
  hanhwa: { name: '한화', style: 'bg-team-hanhwa' },
  lotte: { name: '롯데', style: 'bg-team-lotte' },
  kiwoom: { name: '키움', style: 'bg-team-kiwoom' },
  unknown: { name: 'Unknown', style: 'bg-gray-400' },
};

const Badge = ({ scheme, small }: Props) => {
  const { name, style } = SCHEME_MAP[scheme];
  if (small) {
    return (
      <span
        className={`inline-flex items-center rounded-lg px-[6px] py-[2px] text-[10px] font-bold text-white ${style}`}
      >
        {name}
      </span>
    );
  } else {
    return <span className={`${DEFAULT_STYLE} ${style}`}>{name}</span>;
  }
};
export default Badge;
