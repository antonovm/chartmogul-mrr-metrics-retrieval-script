ChartMogul MRR Metrics Retrieval Script
=======================================

This script is built with Node.js and retrieves monthly recurring revenue (MRR) metrics for a specific time range from the ChartMogul Import API. It outputs the total MRR for each quarter and the MRR for each month in the specified time range.

Installation
------------

1.  Clone this repository: `git clone https://github.com/<YOUR-USERNAME>/chartmogul-mrr-metrics-retrieval-script.git`.
2.  Install dependencies: `cd chartmogul-mrr-metrics-retrieval-script && npm install` or `cd chartmogul-mrr-metrics-retrieval-script && yarn`.
3.  Create a `.env` file and set the `CHARTMOGUL_API_KEY` environment variable to your ChartMogul API key.

Usage
-----

Start the server by running `yarn start` or `npm run start` after building the app using `yarn build` or `npm run build`. The server will listen on port 3000.

Access `http://localhost:3000` to retrieve the MRR metrics in the specified format and range.

Configuration
-------------

### Date Range

You can set the start and end date for the MRR metric retrieval by editing the `startDate` and `endDate` fields in the `config.ts` file. The dates should be in the format `YYYY-MM-DD`.

### Output Format

The MRR metrics will be returned as a JSON object as a response to the GET query, and also printed in console in the following format:

```
Total MRR for QX 20XX: $XXXX.XX
January 20XX: $XXXX.XX
February 20XX: $XXXX.XX
March 20XX: $XXXX.XX
April 20XX: $XXXX.XX
...
```

Contributing
------------

Contributions to this repository are welcome. Please submit a pull request with your changes.

License
-------

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).