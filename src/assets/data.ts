import { Data } from "../features/poject-tree-menu/Project.types";

export const data: Data = {
	"projects": [
	  {
		"project_id": "db065bac-0054-4e72-b52b-56e7dd3fbeb2",
		"name": "Test Project #1",
		"description": "A test project for development",
		"created_at": "2025-01-05T16:47:30.304766+00:00",
		"updated_at": null
	  },
	  {
		"project_id": "71d92305-73d6-4672-a0ed-ad746b6be5aa",
		"name": "Test Project #2",
		"description": "Another test project for development",
		"created_at": "2025-01-05T16:47:30.304766+00:00",
		"updated_at": null
	  }
	],
	"experiments": [
	  {
		"experiment_id": "9cb6dce3-e0e1-45dc-b13d-ed0eb778acf4",
		"project_id": "db065bac-0054-4e72-b52b-56e7dd3fbeb2",
		"name": "Test Experiment #1",
		"description": "A test experiment within the test project for development",
		"created_at": "2025-01-05T16:47:30.304766+00:00",
		"updated_at": null
	  },
	  {
		"experiment_id": "caf31d9d-a450-4100-a7b2-2f460c9de127",
		"project_id": "db065bac-0054-4e72-b52b-56e7dd3fbeb2",
		"name": "Test Experiment #2",
		"description": "Another test experiment within the test project for development",
		"created_at": "2025-01-05T16:47:30.304766+00:00",
		"updated_at": null
	  },
	  {
		"experiment_id": "0a278f92-f688-4b0f-a21e-37d166330e32",
		"project_id": "71d92305-73d6-4672-a0ed-ad746b6be5aa",
		"name": "Test Experiment #3",
		"description": "A test experiment within the test project for development",
		"created_at": "2025-01-05T16:47:30.304766+00:00",
		"updated_at": null
	  }
	],
	"images": [
	  {
		"image_id": "865ecd90-338f-4b1d-9e76-a2d9ea9d48f6",
		"experiment_id": "9cb6dce3-e0e1-45dc-b13d-ed0eb778acf4",
		"storage_id": "85bff4a8-8d5e-4f71-bea5-8b45877ba685",
		"review_status": "pending",
		"reviewed_at": null,
		"reviewed_by": null,
		"created_at": "2025-01-05T16:47:30.304766+00:00",
		"updated_at": null
	  },
	  {
		"image_id": "38021744-1061-4f24-b09f-4f7599ceb4ae",
		"experiment_id": "9cb6dce3-e0e1-45dc-b13d-ed0eb778acf4",
		"storage_id": "308a4811-4d33-4799-895e-35b86558c986",
		"review_status": "pending",
		"reviewed_at": null,
		"reviewed_by": null,
		"created_at": "2025-01-05T16:47:30.304766+00:00",
		"updated_at": null
	  },
	  {
		"image_id": "87dca653-b117-4b34-9aef-4d11860f90b2",
		"experiment_id": "caf31d9d-a450-4100-a7b2-2f460c9de127",
		"storage_id": "29e08894-7a5b-46ad-8a32-ad9f0fda1d5f",
		"review_status": "pending",
		"reviewed_at": null,
		"reviewed_by": null,
		"created_at": "2025-01-05T16:47:30.304766+00:00",
		"updated_at": null
	  }
	]
  }