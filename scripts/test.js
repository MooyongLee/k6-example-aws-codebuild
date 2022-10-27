import http from 'k6/http';

export const options = {
  stages: [
    { duration: '10s', target: 1000 },
    { duration: '30s', target: 1000 },
    { duration: '10s', target: 0 },
  ],
};

export default function () {
    const res = http.get('https://test.k6.io');
}
