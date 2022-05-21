# StackedOUT - Fullstack Application Inspired by LinkedIn

<img width="1440" alt="Screen Shot 2022-05-20 at 8 25 15 PM" src="https://user-images.githubusercontent.com/91504668/169658840-4d1f6521-6fb3-404d-b895-007ed43fea27.png">

If you would like to see my backend code, check it out here: https://github.com/ZakSchenck/stacked-out-backend

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

