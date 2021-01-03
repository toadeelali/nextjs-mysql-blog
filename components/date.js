import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export default function Date({ dateString }) {
  // const date = parseISO(dateString)
  // return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
  return <div>{dayjs(dayjs.utc(dateString).local()).format('MMMM DD, YYYY')}</div>;
}
