const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wsuser2016', {
    w_nosw: {
      type: DataTypes.STRING(24),
      allowNull: false,
      primaryKey: true,
      comment: "코드"
    },
    w_area: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "지역"
    },
    w_sangho: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "상호명"
    },
    w_tel: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "전화"
    },
    w_hp: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "핸드폰"
    },
    w_backup: {
      type: DataTypes.STRING(60),
      allowNull: true,
      comment: "ì„œë¸Œë°±ì—…ì¼"
    },
    w_s_backup: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    w_upgrade: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "ì—…ê·¸ë ˆì´ë“œ  ----  ê°œë³„ì—…ê·¸ë ˆì´ë“œë¥¼ ìœ„í•´ ë§Œë“¤ì–´ì§„ í•„ë“œ (1.6.28)"
    },
    w_i_date: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ì„¤ì¹˜ì¼ìž"
    },
    w_mysql_start: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    w_e_date: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ë³´ì¦ê¸°ê°„"
    },
    w_db_path: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ë””ë¹„ê²½ë¡œ"
    },
    w_db_name: {
      type: DataTypes.STRING(90),
      allowNull: true,
      comment: "ë””ë¹„ëª…"
    },
    w_db_table: {
      type: DataTypes.STRING(90),
      allowNull: true,
      comment: "ë””ë¹„í…Œì´ë¸”"
    },
    w_db_user: {
      type: DataTypes.STRING(90),
      allowNull: true,
      comment: "ë””ë¹„ì‚¬ìš©ìž"
    },
    w_db_pass: {
      type: DataTypes.STRING(90),
      allowNull: true,
      comment: "ë””ë¹„íŒ¨ìŠ¤ì›Œë“œ"
    },
    w_dae_name: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ëŒ€í‘œìž"
    },
    w_serino: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ì‹œë¦¬ì–¼"
    },
    w_ver: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "ë²„ì ¼"
    },
    w_autobackup: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ìžë™ë°±ì—…"
    },
    w_lastjob: {
      type: DataTypes.STRING(150),
      allowNull: false,
      comment: "ë§ˆì§€ë§‰ì ‘ì†ì¼ìž"
    },
    w_saupjano: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ì‚¬ì—…ìžë²ˆí˜¸"
    },
    w_uptae: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ì—…íƒœ"
    },
    w_jongmok: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ì¢…ëª©"
    },
    w_bank1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ê³„ì¢Œë²ˆí˜¸1"
    },
    w_bank2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ê³„ì¢Œë²ˆí˜¸2"
    },
    w_settype: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "설치유형 1-정상,2-월납,3-유지보수,4-데모"
    },
    w_bigo: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ë¹„ê³ "
    },
    w_e_job: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ê³ ìœ ë²ˆí˜¸ 29"
    },
    w_pos: {
      type: DataTypes.STRING(21),
      allowNull: true,
      comment: "ìš°íŽ¸ë²ˆí˜¸"
    },
    w_posjuso: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ìš°íŽ¸ì£¼ì†Œ"
    },
    w_juso: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ìƒì„¸ì£¼ì†Œ"
    },
    w_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "í™ˆíŽ˜ì´ì§€"
    },
    w_jobname: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ìž‘ì—…ìž"
    },
    w_fax: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "íŒ©ìŠ¤ë²ˆí˜¸"
    },
    w_mail: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ë©”ì¼ì£¼ì†Œ"
    },
    w_kwanggo: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ê´‘ê³ ë¬¸êµ¬"
    },
    w_ipno: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ì•„ì´í”¼ì£¼ì†Œ"
    },
    w_DisMemo: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ë©”ëª¨"
    },
    w_s_date: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    w_upilja: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "ì—…ë°ì´íŠ¸ì¼ìž"
    },
    w_yugibosu: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ìœ ì§€ë³´ìˆ˜"
    },
    w_reserve_date: {
      type: DataTypes.STRING(60),
      allowNull: true,
      comment: "ì˜ˆì•½ì¼ìž"
    },
    w_reserve_no: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ì˜ˆì•½ë²ˆí˜¸"
    },
    w_yujibosu: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    w_dataPath: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "êµ¬. ë°ì´íƒ€ê²½ë¡œ"
    },
    w_os: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "OS"
    },
    w_memo: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ë©”ëª¨"
    },
    w_connect: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "ì ‘ì†ì—¬ë¶€"
    },
    w_checktime: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    w_fontcolodr: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ê¸€ìžìƒ‰"
    },
    w_backcolor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ë°”íƒ•ìƒ‰"
    },
    w_fonteff: {
      type: DataTypes.STRING(12),
      allowNull: true,
      comment: "ê¸€ìžíš¨ê³¼"
    },
    w_font_bold: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "ê¸€ìžêµµê²Œ"
    },
    w_font_italic: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "ê¸€ìžì´í…”ë¦­"
    },
    w_font_underline: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "ê¸€ìžë°‘ì¤„"
    },
    w_font_strikethrough: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "ê¸€ìžì·¨ì†Œì„ "
    },
    w_endtime: {
      type: DataTypes.STRING(60),
      allowNull: true,
      comment: "ë§ˆì¹¨ì¼ì‹œ"
    },
    w_jobtype: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ì—…ì¢…ìœ í˜•"
    },
    w_exe_su: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "실행수"
    },
    w_exe_hap: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "실행합"
    },
    w_nickname: {
      type: DataTypes.STRING(60),
      allowNull: true,
      comment: "별명"
    },
    w_b_no: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "블루실행수"
    },
    w_b_tot: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "블루실행합"
    },
    w_link_code: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "연동코드"
    },
    w_alim1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "알림1"
    },
    w_alim2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "알림2"
    },
    w_alim3: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "알림3"
    },
    w_alim4: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "알림4"
    },
    w_yugibosu_memo: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "유지보수메모"
    },
    w_MacAddr1: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "전체맥주소"
    },
    w_MacAddr2: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "사용맥주소"
    },
    w_itemexp: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "작업이름 (사용자등록 맨아래)"
    },
    w_job_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "작업자"
    },
    w_comchk: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "맥체크"
    },
    w_db_select: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "디비체크"
    },
    w_user_id1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ì‚¬ìš©ìž1"
    },
    w_user_pass1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ì‚¬ìš©ìž1 íŒ¨ìŠ¤ì›Œë“œ"
    },
    w_user_name1: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "ì‚¬ìš©ìž1 ì´ë¦„"
    },
    w_user_master1: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    w_user_nickname1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w_user_id2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    w_user_pass2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    w_user_name2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w_user_master2: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    w_user_nickname2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w_user_id3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    w_user_pass3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    w_user_name3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w_user_master3: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    w_user_nickname3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w_user_id4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    w_user_pass4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    w_user_name4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w_user_master4: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    w_user_nickname4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w_user_id5: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    w_user_pass5: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    w_user_name5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w_user_master5: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    w_user_nickname5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w_user_id6: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    w_user_pass6: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    w_user_name6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w_user_master6: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    w_user_nickname6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w_user_id7: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    w_user_pass7: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    w_user_name7: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w_user_master7: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    w_user_nickname7: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w_user_id8: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    w_user_pass8: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    w_user_name8: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w_user_master8: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    w_user_nickname8: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w_user_id9: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    w_user_pass9: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    w_user_name9: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w_user_master9: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    w_user_nickname9: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    w_serial_c: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "cpu"
    },
    w_serial_m: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "마더보드"
    },
    w_serial_h: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "HDD"
    },
    w_serial_na: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "맥ALL"
    },
    w_serial_n: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "맥1"
    },
    w_jobck: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    w_startjob: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    w_nongjinchong_no: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "농진청구매이력번호"
    },
    w_nsc_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    w_nsc_pass: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    w_card_chk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    w_link_new: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    w_agree_ck: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wsuser2016',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "w_nosw" },
        ]
      },
    ]
  });
};
