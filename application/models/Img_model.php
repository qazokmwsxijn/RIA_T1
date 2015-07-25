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

	public function addType($typename) {
		return $this->db->insert("type", array('type' => $typename));
	}

	public function deleteImg($imgid) {
		return $this->db->delete('imglink', array('imgid' => $imgid));
	}

	public function deleteType($typeid) {
		return $this->db->delete('type', array('typeid' => $typeid));
	}

	public function editType($typeid, $type) {
		$this->db->where("typeid", $typeid);
		return $this->db->update('type', array('type' => $type));
	}

	public function editImg($imgid, $imgname) {
		$this->db->where('imgid', $imgid);
		return $this->db->update('imglink', array('imgname' => $imgname));
	}
}