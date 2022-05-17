async function createJob(req, res) {
  res.send("create job");
}

async function deleteJob(req, res) {
  res.send("delete job");
}

async function getAllJobs(req, res) {
  res.send("get all jobs");
}

async function updateJob(req, res) {
  res.send("update job");
}

async function showStats(req, res) {
  res.send("show stats");
}

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
