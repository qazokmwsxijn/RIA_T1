<?php
class Img_model extends CI_Model {
	public function __construct() {
		$this->load->database();
	}

	public function getImg($typeid = '') {
		if (!$typeid)
			$res = $this->db->get('imglink');
		else
			$res = $this->db->get_where('imglink', array('typeid' => $typeid));
		return $res->result_array();
	}

	public function getType() {
		$res = $this->db->get("type");
		return $res->result_array();
	}

	public function getNum($typeid = 0) {
		//分别统计各类照片的数量，累加工作可以交给前端……
		$res = $this->db->get_where('imglink', array('typeid' => $typeid));
		return count($res->result_array());
	}
}