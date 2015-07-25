<?php

class Img extends CI_Controller {
	public function __construct() {
		parent::__construct();
		$this->load->model('img_model');
	}

	public function getType() {
		$data = $this->img_model->getType();
		for ($i = 0; $i < count($data); $i ++) {
			$data[$i]['num'] = $this->img_model->getNum($data[$i]['typeid']);
		}
		echo json_encode($data);
	}

	public function getImg() {
		$typeid = $this->input->post('typeid', true);
		if ($typeid === 'all')
			$data = $this->img_model->getImg();
		else
			$data = $this->img_model->getImg($typeid);
		echo json_encode($data);
	}

	public function addType() {
		$typename = $this->input->post("typename", true);
		echo $this->img_model->addType($typename);
	}

	public function deleteImg() {
		$imgid = $this->input->post("imgid", true);
		echo $this->img_model->deleteImg($imgid);
	}

	public function deleteType() {
		$typeid = $this->input->post("typeid", true);
		echo $this->img_model->deleteType($typeid);
	}

	public function editType() {
		$typeid = $this->input->post("typeid", true);
		$type = $this->input->post("type", true);
		echo $this->img_model->editType($typeid, $type);
	}

	public function editImg() {
		$imgid = $this->input->post('imgid', true);
		$imgname = $this->input->post('imgname', true);
		echo $this->img_model->editImg($imgid, $imgname);
	}
}