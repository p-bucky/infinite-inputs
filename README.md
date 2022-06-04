# infinite-inputs

![Screencast from 05-06-22 03_11_08 AM IST](https://user-images.githubusercontent.com/59308744/172026325-c0891283-3f65-492a-aea6-7af366bf6734.gif)

Make `.env` in your root react project and paste `GENERATE_SOURCEMAP=false`

```
const [values, setValues] = useState([])

const data = [
    { firstName: "Alex", secondName: "Fox", address: "Mandir Marg" },
    { address: "NY-45", secondName: "Sharma", firstName: "Mohit" },
    { firstName: "Nitya", secondName: "Kumar", address: "Haryana" }
];
  
<InfiniteInput fieldsValue={data} onChange={setValues}>
  <IField name={"firstName"} type={"text"} />
  <IField name={"secondName"} type={"text"} />
  <IField name={"address"} type={"text"} />
</InfiniteInput>
```
