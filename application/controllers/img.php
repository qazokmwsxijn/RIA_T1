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

	//图片上传文件处理函数
	public function uploadImg() {
		$config['upload_path'] = './upload/';
		$config['allowed_types'] = 'jpg|jpeg|bmp|png';
		$config['max_size'] = 100 * 1024 * 1024;
		$this->load->library('upload', $config);
		foreach ($_FILES as $key => $value) {
			if (!empty($value['name'])) {
				if (!$this->upload->do_upload($key))
					print_r($this->upload->display_errors());
				else
					echo 1;
			}
		}
	}

	//图片信息存储函数
	public function addImg() {
		$data = array(
			'imgname' => $this->input->post('imgname'),
			'typeid' => $this->input->post('typeid'),
			'url' => $this->input->post('url')
		)
		$this->img_model->addImg($data);
	}
}