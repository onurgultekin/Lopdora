<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Homepage extends CI_Controller {

	public function index()
	{
		$data["view"] = "onur";
		$this->load->view('homepage',$data);
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */