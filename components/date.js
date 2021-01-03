import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export default function Date({ dateString }) {
  return <div>{dayjs(dayjs.utc(dateString).local()).format('MMMM DD, YYYY')}</div>;
}
