# StackedOUT - Fullstack Application Inspired by LinkedIn

<img width="1440" alt="Screen Shot 2022-05-20 at 8 25 15 PM" src="https://user-images.githubusercontent.com/91504668/169658840-4d1f6521-6fb3-404d-b895-007ed43fea27.png">

If you would like to see my backend code, check it out here: https://github.com/ZakSchenck/stacked-out-backend .

## Project Hurtles
I created this project using Mobile First methods with Sass. To my surprise, the styling/layout was my biggest hurtle coming from mobile due to having to add components based on the screen width. I solved this by adding a useEffect hook that handles the resize and updates the state of the width after every re render. Then in the JSX, I added conditional rendering for the needed components. The code is below: <br />
```
const [width, setWidth] = useState(window.innerWidth);
 
useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  ```
  And the conditional rendering:
  ```
{width >= 1100 && (
   <SingleJobDesktop nothingState={nothingState} jobId={jobId} />
 )}
   ```

## Tools Used
• React  <br />
• React Router <br />
• Sass/SCSS <br />
• Node.js <br />
• Express.js <br />
• PostgreSQL <br />

## CRUD operations used
• GET job listings <br />
```
const getAllJobs = (req, res) => {
  db.query("SELECT * from public.listing", (err, dbRes) => {
    if (err) {
      res.status(500).json(error.message);
    } else {
      res.status(200).json(dbRes.rows);
    }
  });
};
```
• POST new job listing <br />
```
const createListing = (req, res) => {
  const query =
    "INSERT INTO public.listing (img, employees, company, jobtype, jobtitle, location, description) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
  const b = req.body;
  const values = [
    b.img,
    b.employees,
    b.company,
    b.jobtype,
    b.jobtitle,
    b.location,
    b.description,
  ];
  db.query(query, values, (error, dbRes) => {
    if (error) {
      res.status(500).json(error.message);
    } else {
      res.status(200).json(dbRes.rows);
    }
  });
};
```
• DELETE job listing <br />
```
const deleteListing = (req, res) => {
  db.query(
    "DELETE from public.listing WHERE public.listing.id = $1",
    [Number(req.params.id)],
    (error, dbRes) => {
      if (error) {
        res.status(500).json(error.message);
      } else {
        res.status(200).json(dbRes.rows);
      }
    }
  );
};
```

