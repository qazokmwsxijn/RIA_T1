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
}