export default {
  async fetch(request, env, ctx) {
    var i=Math.floor(Math.random()*8);;
    var mycars = new Array();
    mycars[0] = "我们笑着说再见，却深知再见遥遥无期。	";
    mycars[1] = "你总说毕业遥遥无期，转眼就各奔东西。";
    mycars[2] = "愿你走过一场青春，还留有三分纯真。";
    mycars[3] = "那些种在校园里长不大的记忆，那些留在岁月里忘不掉的纯真。";
    mycars[4] = "青春太过于轻狂与骄傲，泪水太过于稚嫩于无悔。";
    mycars[5] = "后来我们各奔东西，一句“有空常联系”成了我们这段感情的墓志铭。";
    mycars[6] = "下个秋天，这间教室自然会坐满了人，只是再也不可能是我们。";
    mycars[7] = "路遥遥，心漫漫，伤离别，何感叹；风潇潇，夜长长，盼君至，不觉眠。";
    return new Response(mycars[i]);
  },
};
