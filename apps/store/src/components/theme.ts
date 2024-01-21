
// TypeScript 인터페이스로 색상 테마 정의
interface ColorTheme {
    color: string; // 텍스트 색상
    backgroundColor: string; // 배경 색상
    borderColor: string; // 테두리 색상
    boxShadowColor: string; // 그림자 색상
    outlineColor: string; // 외곽선 색상
    gradientStartColor: string; // 그라데이션 시작 색상
    gradientEndColor: string; // 그라데이션 종료 색상
    textShadowColor: string; // 텍스트 그림자 색상
  }
  
  // 색상 테마 객체 생성
  const colorTheme: ColorTheme = {
    color: '#333333', // 검정색 텍스트
    backgroundColor: '#ffffff', // 흰색 배경
    borderColor: '#dddddd', // 연한 회색 테두리
    boxShadowColor: 'rgba(0, 0, 0, 0.1)', // 흰색에 가까운 그림자
    outlineColor: '#ffcc00', // 노란색 외곽선
    gradientStartColor: '#3498db', // 쿨 블루
    gradientEndColor: '#e74c3c', // 앨리안스 레드
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // 검정색 텍스트 그림자
  };
  
  
  interface FontTheme {
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    fontStyle: string;
    fontVariant: string;
    lineHeight: string;
    letterSpacing: string;
    textAlign: string;
    textDecoration: string;
  }
  
  
  // 폰트 테마 객체 생성
  const fontTheme: FontTheme = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontVariant: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0px',
    textAlign: 'left',
    textDecoration: 'none'
  };
  
  
  // TypeScript 인터페이스로 테두리 테마 정의
  interface BorderTheme {
    borderWidth: string; // 테두리 두께
    borderStyle: string; // 테두리 스타일
    borderColor: string; // 테두리 색상
    borderRadius: string; // 테두리 모서리 둥글기
    borderCollapse: string; // 테이블 테두리 간의 간격
    borderSpacing: string; // 테이블 테두리 간의 간격
  }
  
  // 테두리 테마 객체 생성
  const borderTheme: BorderTheme = {
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#000000',
    borderRadius: '10px',
    borderCollapse: 'collapse',
    borderSpacing: '5px',
  };